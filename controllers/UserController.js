import supabase from '../config/supabase.js'

const UserController = {
    getAll: async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('items')
                .select('*')
                .order('created_at', { ascending: false })

            if (error) throw error
            res.json(data)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    create: async (req, res) => {
        try {
            const testConnection = await supabase
                .from('items')
                .select('*')
                .limit(1)
            
            if (testConnection.error) {
                console.error('Supabase connection error:', testConnection.error)
                return res.status(500).json({ error: 'Database connection error' })
            }

            console.log('Request body:', req.body)
            const { title, description, status } = req.body

            const { data, error } = await supabase
                .from('items')
                .insert([{ title, description, status }])
                .select()

            if (error) {
                console.error('Supabase insert error:', error)
                throw error
            }

            res.status(201).json(data)
        } catch (error) {
            console.error('Full error:', error)
            res.status(500).json({ 
                error: error.message,
                details: error
            })
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params
            const { title, description, status } = req.body
            const { data, error } = await supabase
                .from('items')
                .update({ title, description, status, updated_at: new Date() })
                .eq('id', id)
                .select()
                .single()

            if (error) throw error
            res.json(data)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params
            const { error } = await supabase
                .from('items')
                .delete()
                .eq('id', id)

            if (error) throw error
            res.json({
                message: `Item ${id} deleted successfully`,
                deletedAt: new Date()
            })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

export default UserController
